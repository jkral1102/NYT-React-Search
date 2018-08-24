const args = ["run build"];
const opts = { stdio: "inherit", cwd: "client", shell: true };
require("child_process").spawn("npm", args, opts);
process.env.MONGODB_URI =mongodb://nytsearch:IsQ3JXjURSITV707aK5XL1qP8t7v05Mic0AvUGyNFt9v2vi5pkjWg9opYrWyevrXrmnfU8qAafq2HlDpncFpvw==@nytsearch.documents.azure.com:10255/?ssl=true&replicaSet=globaldb
