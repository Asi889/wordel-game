module.exports = {
    devServer: {
        // Fixing issue with WDS disconnected and sockjs network error
        host: '0.0.0.0',
        public: '0.0.0.0:3000',
        disableHostCheck: true,
        // End of fix
      }
  }