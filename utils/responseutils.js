const success_response = {
  status: true,
  code: 200,
  data: {},
};

const failure_response = {
  status: false,
  code: 400,
  message: "",
};

const prepareSuccessResponse = (data, code) => {
  return { ...success_response, code: code || 200, data };
};

const prepareFailureResponse = (message, code) => {
  return { ...failure_response, code: code || 400, message };
};

module.exports = { prepareFailureResponse, prepareSuccessResponse };
