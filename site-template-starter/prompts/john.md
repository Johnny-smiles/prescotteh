codex run "Use site-template-starter/codex.md as the runbook with site-template-starter/intake/client.yaml to generate the Vogt Electric site."



bash site-template-starter/scripts/codex-start.sh \
  --slug vogt \
  --intake site-template-starter/intake/client.yaml && \
  cd ../client-vogt && \
  codex run "Use site-template-starter/codex.md as the runbook with site-template-starter/intake/client.yaml. Run site-template-starter/scripts/setup.sh using intake values. Pick varied hero/services from site-template-starter/catalog/sections.json. Generate Home + 3–5 Service pages from prompts/home.md and prompts/service.md, plus FAQs from prompts/faq.md. Add LocalBusiness JSON-LD on Home and Service JSON-LD on each service page. Update nav/footer links, ensure public/logo.png is referenced, verify with npm run dev, then create and push a branch client/vogt."
