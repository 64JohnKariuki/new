# GitHub Deployment Configuration

## Required GitHub Secrets

To deploy your application to cPanel, you need to set up the following secrets in your GitHub repository:

### Go to: Settings → Secrets and variables → Actions → New repository secret

### For Simple Deployment (deploy.yml):
```
FTP_HOST          - Your cPanel FTP hostname (e.g., yoursite.com or ftp.yoursite.com)
FTP_USERNAME      - Your cPanel FTP username
FTP_PASSWORD      - Your cPanel FTP password
```

### For Advanced Deployment (deploy-advanced.yml):

#### Production Environment:
```
PROD_FTP_HOST     - Production FTP hostname
PROD_FTP_USERNAME - Production FTP username  
PROD_FTP_PASSWORD - Production FTP password
PROD_FTP_PATH     - Production server path (e.g., /public_html/)
```

#### Staging Environment (optional):
```
STAGING_FTP_HOST     - Staging FTP hostname
STAGING_FTP_USERNAME - Staging FTP username
STAGING_FTP_PASSWORD - Staging FTP password  
STAGING_FTP_PATH     - Staging server path (e.g., /staging/)
```

## How to Set Up Secrets:

1. Go to your GitHub repository
2. Click on **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add each secret one by one with the exact names above

## Deployment Triggers:

### Simple Workflow (deploy.yml):
- Deploys on push to `main` or `master` branch
- Single environment deployment

### Advanced Workflow (deploy-advanced.yml):
- **Staging**: Deploys on push to `develop` branch
- **Production**: Deploys on push to `main` or `master` branch
- Includes testing, linting, and build artifacts

## cPanel Setup:

1. **Find your FTP credentials** in cPanel → File Manager or FTP Accounts
2. **Server path** is usually `/public_html/` for main domain
3. **Subdomain paths** are usually `/public_html/subdomain/`

## File Structure After Deployment:

```
public_html/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── other build files...
```

## Troubleshooting:

### Common Issues:
1. **FTP Connection Failed**: Check hostname, username, password
2. **Permission Denied**: Ensure FTP user has write permissions
3. **Build Failed**: Check Node.js version compatibility
4. **Assets Not Loading**: Verify server path is correct

### Debugging Steps:
1. Check the Actions tab for detailed error logs
2. Verify all secrets are set correctly
3. Test FTP credentials manually with an FTP client
4. Ensure cPanel has enough disk space

## Test Your Setup:

1. Make a small change to your code
2. Commit and push to trigger deployment
3. Check the Actions tab to monitor progress
4. Visit your website to verify deployment

## Security Notes:

- Never commit FTP credentials to your repository
- Use strong passwords for FTP accounts
- Consider using SSH/SFTP if your host supports it
- Regularly rotate your FTP passwords
