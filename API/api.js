const base_url = "https://api.github.com/search/repositories?";

export function getReposFromApi (page, date) {
    var url = base_url + "q=created:>" + date + "&sort=stars&order=desc&page=" + page;
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
