const get = require('lodash/get');

function filterJavascriptItems(item) {
  const href = get(item, 'props.href');
  const src = get(item, 'props.src');
  const expression = new RegExp('.(js|json)$');

  if (href && expression.exec(href)) {
    return false;
  }

  if (src && expression.exec(src)) {
    return false;
  }

  return true;
}

exports.onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
  getPostBodyComponents,
  replacePostBodyComponents,
}) => {
  if (process.env.NODE_ENV === 'production') {
    const filteredHeadComponents = getHeadComponents().filter(
      filterJavascriptItems
    );
    replaceHeadComponents(filteredHeadComponents);
    const filteredPostBodyComponents = getPostBodyComponents().filter(
      filterJavascriptItems
    );
    replacePostBodyComponents(filteredPostBodyComponents);
  }
};
