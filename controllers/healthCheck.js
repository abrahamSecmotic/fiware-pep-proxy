const healthCheck = function(req, res) {
  return res.status(200).send('Health')
};

exports.HealthCheck = healthCheck;