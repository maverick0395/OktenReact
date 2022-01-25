const formQuery = (params) => {
    const filterQuery = params.reduce((fullQuery, partQuery) => {
        const separator = fullQuery === '?' ? '' : '&';
        fullQuery = fullQuery.concat(separator, `${partQuery[0]}=${partQuery[1].toLowerCase()}`);
        return fullQuery;
    }, '?');
    return filterQuery;
}

export {formQuery};