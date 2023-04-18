const { search } = require('../../services');
const { catchAsyncWrapper } = require('../../utils');

const ingredientsListController = catchAsyncWrapper(async (req, res) => {
  const searchResult = await search.ingredientsSearch();

  res.status(200).json({
    searchResult,
  });
});
// TODO: refactor both in one
const ingredientsSearchController = catchAsyncWrapper(async (req, res) => {
  const {keyWord} = req.body;

  const searchResult = await search.ingredientsSearch(keyWord);

  if (searchResult.length === 0) {
    return res.status(204).json();
  }

  res.status(200).json({
    searchResult,
  });
});

module.exports = { ingredientsListController,ingredientsSearchController };
