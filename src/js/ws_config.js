var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'WalletShellCryG';
config.appDescription = 'CryGCoin Wallet';
config.appSlogan = 'Slow and steady wins the race!';
config.appId = 'xyz.cryg.walletshellcryg';
config.appGitRepo = 'https://github.com/mi-mai/crygcoin-wallet-electron';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 18898;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'cwl';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'cryg-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v0.1.0";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
//config.blockExplorerUrl = 'http://ex.cryg.xyz/transaction.html?hash=[[TX_HASH]]';
config.blockExplorerUrl = 'http://ex.cryg.xyz/?hash=[[TX_HASH]]#blockchain_block';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'nodes.cryg.xyz';


// remote node list update url, set to null if you don't have one
// for TRTL:
// raw list: https://raw.githubusercontent.com/turtlecoin/turtlecoin-nodes-json/master/turtlecoin-nodes.json
// filtered: https://trtl.nodes.pub/api/getNodes
config.remoteNodeListUpdateUrl = 'http://node.cryg.xyz/api/getNodes';

// set to false if using raw/unfiltered node list
config.remoteNodeListFiltered = true;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  'nd2.cryg.xyz:18898',
  'nd4.cryg.xyz:18898',
  'nd3.cryg.xyz:18898',
  'nd1.cryg.xyz:18898',
  ];
config.remoteNodeCacheSupported = false;
config.remoteNodeSslSupported = false;

// your currency name
config.assetName = 'CryGCoin';
// your currency ticker
config.assetTicker = 'CRYG';
// your currency address prefix, for address validation
config.addressPrefix = 'cRYG';
// standard wallet address length, for address validation
config.addressLength = 99;
// integrated wallet address length, for address validation. Added length is length of payment ID encoded in base58.
config.integratedAddressLength = config.addressLength + ((64 * 11) / 8);

// minimum fee for sending transaction
config.minimumFee = 0.1;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to represent human readable value
config.decimalPlaces = 2;
// to convert from atomic unit
config.decimalDivisor = 10 ** config.decimalPlaces;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'WalletShell Donation',
    address: 'cRYGbwTpAt12N9EzUP4w42JQDP1XWYWNe6o4jfXufxUtMsQ1ipq2jXZD84FSAKyBcUjVza9j9UsvL88NR1VxExKADcgEwvG9A2J',
    paymentId: '',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
