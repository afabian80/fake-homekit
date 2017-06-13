# fake-homekit
Faking a HomeKit accessory to test Apple HomeKit on an iPhone

I have an iPhone and I wanted to play with the HomeKit application. However, I do not have any smart accessories to test with. So I set up a fake environment in a Linux VM that acts as a HomeKit device. I used a CentOS 7 machine and followed these steps:
- install CentOS in VirtualBox
- install nodejs: follow https://nodejs.org/en/download/package-manager/#enterprise-linux-and-fedora
- install required avahi stuff: `yum install avahi-compat-libdns_sd-devel`
- disable firewall
  - `systemctl stop firewalld`
  - `systemctl disable firewalld`
- set up HomeBridge: follow https://github.com/nfarina/homebridge
  - use sampel config.json in my repo
- set up a fake accessory as a nodejs web service
  - follow https://blog.risingstack.com/your-first-node-js-http-server/
  - `node express.js`
- find the new HomeBridge hub in iOS HomeKit applicatio, pair and play with it.
  
