yarn run build-react
NODE_ENV=production electron-forge package
pushd out/wallet-recovery-wizard-darwin-x64/wallet-recovery-wizard.app/Contents/Resources/app
rm yarn.lock && yarn install --ignore-engines
popd