# Readme-AI (CODEOWNERS Q&A)

This project provides a tiny REST API that answers questions about the repository's CODEOWNERS file.

Quick start
1. Install:
   npm ci
2. Run locally:
   npm start
3. Query:
   POST /qa with JSON body { "question": "Who owns everything?" }
   If OPENAI_API_KEY is set, the service will call OpenAI to produce a natural language answer using the top matches as context.

Environment
- OPENAI_API_KEY (optional) — if set, the app will call the OpenAI Chat API.
- PORT (optional) — default 3000

Deployment
- Dockerfile included
- GitHub Actions CI included
- Docs are in /docs for GitHub Pages

Notes
- This scaffold uses fuzzy search (Fuse.js) against CODEOWNERS lines as a simple retrieval step. For better results, enable an embeddings-based vector store and use the OpenAI embeddings endpoint.
