var database = require("../database/config");

function buscarUltimasMedidas(limite_linhas) {
    var instrucaoSql = `
        SELECT 
            MONTHNAME(dtCad) AS mes,
            COUNT(*) AS quantidade_usuarios
        FROM usuario
        GROUP BY mes
        ORDER BY mes DESC
        LIMIT ${limite_linhas};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
        .then(function (resultado) {
            return resultado;
        })
        .catch(function (erro) {
            throw erro;
        });
}

function buscarMedidasEmTempoReal() {
    var instrucaoSql = `
        SELECT 
            MONTHNAME(dtCad) AS mes,
            COUNT(*) AS quantidade_usuarios
        FROM usuario
        GROUP BY mes
        ORDER BY mes DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
        .then(function (resultado) {
            return resultado;
        })
        .catch(function (erro) {
            throw erro;
        });
}

function buscarUltimasNoticias(limite_linhas) {
    var instrucaoSql = `SELECT usuario.nome, COUNT(noticias.id) AS quantidade_posts 
    FROM usuario
    JOIN noticias ON usuario.id = noticias.fk_usuario
    GROUP BY usuario.nome
    ORDER BY quantidade_posts DESC
    LIMIT ${limite_linhas};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarNoticiasEmTempoReal() {
    var instrucaoSql = `SELECT usuario.nome, COUNT(noticias.id) AS quantidade_posts 
    FROM usuario
    JOIN noticias ON usuario.id = noticias.fk_usuario
    GROUP BY usuario.nome
    ORDER BY quantidade_posts DESC
    LIMIT 3;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasNoticias,
    buscarNoticiasEmTempoReal
}
