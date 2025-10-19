export type Service = {
  slug: string
  title: string
  summary: string
  bullets: string[]
  schemaType?: 'Service' | 'HVACBusiness' | 'Contractor'
  metaDescription?: string
  keywords?: string[]
  content?: string
}

export const services: Service[] = [
  { slug: 'residential-electrical', title: 'Residential Electrical', summary: 'Safe, code-compliant wiring and upgrades for your home.', bullets: [
    'Panel upgrades and service changes',
    'Lighting installs & troubleshooting',
    'Surge protection and safety inspections',
  ] },
  { slug: 'commercial-electrical', title: 'Commercial Electrical', summary: 'Reliable electrical work for offices, shops, and build-outs.', bullets: [
    'Tenant improvements & new circuits',
    'LED retrofits and maintenance',
    'Dedicated circuits for equipment',
  ] },
  { slug: 'heating-and-cooling', title: 'Heating & Cooling', summary: 'Furnace, AC, and mini-split installation and service.', bullets: [
    'Furnace/AC install and replacement',
    'Ductless mini-splits and heat pumps',
    'Seasonal tune-ups & repairs',
  ] },
  { slug: 'hvac-maintenance', title: 'HVAC Maintenance', summary: 'Keep systems efficient with scheduled checkups.', bullets: [
    'Filter, coil, and safety checks',
    'Thermostat and airflow balancing',
    'Priority service options',
  ] }
]
