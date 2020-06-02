export const formatDate = date => {
    let formattedDate = new Date(date);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };

    return formattedDate.toLocaleDateString("pt-BR", options);
}