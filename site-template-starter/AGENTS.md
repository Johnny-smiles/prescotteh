# AGENTS.md — Codex Project Configuration
# Location: site-template-starter/AGENTS.md

## Defaults
runbook: site-template-starter/codex.md
intake: site-template-starter/intake/client.yaml
model: gpt-5-codex
reasoning: medium
verbosity: concise
max_tokens: 4000

## Approvals
# Automatically allow safe operations without asking every time.
allow:
  - read
  - write
  - edit
  - run:shell
  - run:npm
  - generate:copy
  - patch:vue
  - patch:config

## Notes
# This project automates site duplication and rebranding using Codex.
# The runbook defines:
#   1. Duplicate from template
#   2. Patch configs (site.config.ts, robots.txt, netlify.toml)
#   3. Generate copy from prompts (home.md, service.md, faq.md)
#   4. Write static service pages instead of dynamic routing
#   5. Validate build
#
# To start:
#   cd site-template-starter
#   codex run
#
# Codex will read client info from the intake YAML and produce a full site build.
