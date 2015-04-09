module.exports = {
    server: {
      options: {
        port: 8080,
        hostname: "127.0.0.1",
        base: ["grunt/tmp/styleguide", "<%= settings.rootDir %>"],
        open: true,
        keepalive: true
      }
    }
}