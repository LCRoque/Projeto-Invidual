var database = require("../database/config");

function buscarUltimasMedidas(limite_linhas) {
    var instrucaoSql = `SELECT COUNT(*) AS quantidade_usuarios FROM usuario`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {
    var instrucaoSql = `SELECT COUNT(*) AS quantidade_usuarios FROM usuario;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasNoticias(limite_linhas) {
    var instrucaoSql = `SELECT COUNT(*) AS quantidade_noticias FROM noticias`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarNoticiasEmTempoReal() {
    var instrucaoSql = `SELECT COUNT(*) AS quantidade_noticias FROM noticias;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasNoticias,
    buscarNoticiasEmTempoReal
}
