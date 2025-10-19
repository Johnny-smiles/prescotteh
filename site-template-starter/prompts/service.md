
---

### ✅ `service.md`
```md
# Service Page Content Brief

Write concise, helpful descriptions. Each section should be under 80 words.  
For each service in the intake, return:
- short headline (<10 words)
- intro paragraph (<80 words)
- 3 bullets (benefits or features)
- 1-sentence CTA (“Book your estimate today.”)
- 3–4 FAQs, each with 1–2 sentence answers  

**Tone:** direct, local, and trustworthy. Avoid jargon.  

**Return JSON:**
```json
{
  "title": "Service Name",
  "intro": "Short intro paragraph.",
  "bullets": ["Benefit 1", "Benefit 2", "Benefit 3"],
  "cta": "Short call-to-action sentence.",
  "faqs": [{"q": "...", "a": "..." }]
}
