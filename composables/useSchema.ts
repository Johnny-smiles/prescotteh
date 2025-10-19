import { siteConfig, type BusinessType } from '~/site.config'

export const useSchema = () => {
  const config = siteConfig
  
  const getLocalBusinessSchema = () => {
    const businessType = (config as any).businessType as BusinessType | undefined
    
    return {
      '@context': 'https://schema.org',
      '@type': businessType || 'LocalBusiness',
      name: config.siteName,
      url: config.siteUrl,
      telephone: config.phone,
      description: config.description,
      image: config.socialImage || undefined,
      address: {
        '@type': 'PostalAddress',
        streetAddress: config.location.street || undefined,
        addressLocality: config.location.city,
        addressRegion: config.location.state,
        postalCode: config.location.zip,
        addressCountry: config.location.country
      },
      openingHours: config.hours,
      geo: config.location.latitude && config.location.longitude ? {
        '@type': 'GeoCoordinates',
        latitude: config.location.latitude,
        longitude: config.location.longitude
      } : undefined,
      areaServed: config.serviceAreas,
      ...(businessType === 'HVACBusiness' && {
        '@type': 'HVACBusiness',
        serviceType: 'Heating, Ventilation, and Air Conditioning'
      }),
      ...(businessType === 'AutoRepair' && {
        '@type': 'AutoRepair',
        serviceType: 'Automotive Repair Services'
      })
    }
  }
  
  const getServiceSchema = (service: any) => {
    const businessType = (config as any).businessType as BusinessType | undefined
    
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.summary,
      provider: {
        '@type': businessType || 'LocalBusiness',
        name: config.siteName,
        telephone: config.phone,
        areaServed: config.serviceAreas
      },
      serviceType: service.title,
      url: `${config.siteUrl}/services/${service.slug}`
    }
  }
  
  return {
    getLocalBusinessSchema,
    getServiceSchema
  }
}
