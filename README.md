# How to Run Udug Perfumes Website (Restricted Environment)

If you are seeing "Execution Policy" errors in PowerShell, use the following commands to bypass them:

## 1. Install Dependencies
```powershell
cmd /c "npm install"
```

## 2. Run Development Server
```powershell
cmd /c "npm run dev"
```

## 3. Build for Production
```powershell
cmd /c "npm run build"
```

## Troubleshooting
If `vite` is not found, ensure you have run `npm install` first.
The command `cmd /c` runs the command in a standard Command Prompt environment which does not enforce PowerShell's strict execution policies.
"# Udug-website2" 
