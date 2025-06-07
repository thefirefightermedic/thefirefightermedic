# Environment Configuration

## Production Environment Variables
```
NODE_ENV=production
DATABASE_URL=<your_production_database_url>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
VITE_STRIPE_PUBLIC_KEY=<your_stripe_public_key>
OPENAI_API_KEY=<your_openai_api_key>
RUNWAY_API_KEY=<your_runway_api_key>
```

## Staging/Development Toggle
Set `NODE_ENV=staging` to enable staging mode features:
- Extended logging
- Test data validation
- Health check monitoring
- Admin panel access logging

## Git Version Control Setup
Your Replit project already has Git enabled. Use these commands for version control:

```bash
# Create a stable baseline commit
git add .
git commit -m "Stable baseline - all features working"

# Create development branch
git checkout -b development

# Make changes on development branch
git add .
git commit -m "Feature: description"

# Switch back to main for stable releases
git checkout main
git merge development
```

## Rollback Process
1. Check version history in Replit sidebar
2. Use Admin Panel > System Health Monitor to verify issues
3. Restore to last working commit via Replit interface
4. Run test simulations to verify functionality

## Health Monitoring
- System health endpoint: `/api/system/health`
- Admin panel includes real-time health monitoring
- Auto-refresh every 30 seconds
- Manual health checks available

## Deployment Safety
- Use deployment checklist before publishing
- Verify all core functions via admin test simulator
- Check system health status before deployment
- Maintain admin access restriction to admin@thefirefightermedic.com