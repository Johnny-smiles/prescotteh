<template>
  <!-- GTM will be injected via script -->
</template>

<script setup>
// Google Tag Manager - only load in client
onMounted(() => {
  const gtmId = '{{GTM_ID}}' // This will be replaced by setup script
  
  // Only load if GTM_ID is not a token
  if (gtmId && !gtmId.includes('{{')) {
    // Create GTM script
    const script = document.createElement('script')
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`
    document.head.appendChild(script)
    
    // Create noscript iframe
    const noscript = document.createElement('noscript')
    const iframe = document.createElement('iframe')
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`
    iframe.height = '0'
    iframe.width = '0'
    iframe.style.display = 'none'
    iframe.style.visibility = 'hidden'
    noscript.appendChild(iframe)
    document.body.insertBefore(noscript, document.body.firstChild)
  }
})
</script>
