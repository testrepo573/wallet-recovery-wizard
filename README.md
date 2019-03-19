# BitGo Wallet Recovery Wizard

This tool is built for assisting customers with recovering coins from BitGo wallets.

The application currently offers the following recoveries:

* Cross-Chain Recoveries: Recover funds sent to the wrong chain, such as LTC sent to a BTC address.
* Non-BitGo Recoveries: Build and send a transaction using the recovery KeyCard, independent from any BitGo services.

## Installing and Downloading

Please see the [releases page](https://github.com/testrepo573/wallet-recovery-wizard/releases).

## Recovery Instructions
In Wallet Recovery Wizard select the Non-BitGo Recoveries option. Box A is the encrypted user key, Box B is the encrypted backup key, Box C is the BitGo xpub. 
Use the below python function to encrypt the user and backup private keys. 
```
def encrypt_key(password,key,api_key):
    header = {f'Authorization': "Bearer {api_key}",
             'Content-Type':'application/json'}
    payload = {'input': key, 
               'password': password}
    r = requests.post("http://localhost:3080/api/v2/encrypt",headers=header,data=json.dumps(payload))
    return r.json()
```    
