module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7a7e268a757358921b96273855f5d9c3'),
  },
});
