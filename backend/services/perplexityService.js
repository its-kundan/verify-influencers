const axios = require('axios');

const verifyClaim = async (claim) => {
  try {
    const response = await axios.post('https://api.perplexity.ai/verify', {
      claim: claim,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = { verifyClaim };