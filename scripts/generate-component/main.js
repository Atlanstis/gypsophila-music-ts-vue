const chalk = require("chalk");
const path = require("path");
const fs = require("fs");
const resolve = (...file) => path.resolve(__dirname, ...file);
const log = message => console.log(chalk.green(`${message}`));
const successLog = message => console.log(chalk.blue(`${message}`));
const errorLog = error => console.log(chalk.red(`${error}`));
const { vueTemplate } = require("./template");

const generateFile = (path, data) => {
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`);
    return;
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, "utf8", err => {
      if (err) {
        errorLog(err.message);
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};
log("请输入生成的组件名：");
let componentName = "";
process.stdin.on("data", async chunk => {
  const inputName = String(chunk)
    .trim()
    .toString();
  componentName = inputName;
  /**
   * 组件目录路径
   */
  const componentDirectory = resolve("../../src/components", inputName);

  /**
   * vue组件路径
   */
  const componentVueName = resolve(componentDirectory, "index.vue");

  const hasComponentDirectory = fs.existsSync(componentDirectory);
  if (hasComponentDirectory) {
    errorLog(`${inputName}组件目录已存在，请重新输入`);
    return;
  } else {
    log(`正在生成 component 目录 ${componentDirectory}`);
    await dotExistDirectoryCreate(componentDirectory);
  }
  try {
    log(`正在生成 vue 文件 ${componentVueName}`);
    await generateFile(componentVueName, vueTemplate(componentName));
    successLog("生成成功");
  } catch (e) {
    errorLog(e.message);
  }

  process.stdin.emit("end");
});
process.stdin.on("end", () => {
  log("exit");
  process.exit();
});
function dotExistDirectoryCreate(directory) {
  return new Promise(resolve => {
    mkdirs(directory, function() {
      resolve(true);
    });
  });
}

// 递归创建目录
function mkdirs(directory, callback) {
  var exists = fs.existsSync(directory);
  if (exists) {
    callback();
  } else {
    mkdirs(path.dirname(directory), function() {
      fs.mkdirSync(directory);
      callback();
    });
  }
}
