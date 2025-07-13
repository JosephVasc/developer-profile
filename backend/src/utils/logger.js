const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

class Logger {
  static info(message, ...args) {
    console.log(`${colors.blue}[INFO]${colors.reset} ${message}`, ...args);
  }

  static success(message, ...args) {
    console.log(`${colors.green}[SUCCESS]${colors.reset} ${message}`, ...args);
  }

  static warn(message, ...args) {
    console.log(`${colors.yellow}[WARN]${colors.reset} ${message}`, ...args);
  }

  static error(message, ...args) {
    console.log(`${colors.red}[ERROR]${colors.reset} ${message}`, ...args);
  }

  static debug(message, ...args) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`${colors.cyan}[DEBUG]${colors.reset} ${message}`, ...args);
    }
  }
}

module.exports = Logger; 