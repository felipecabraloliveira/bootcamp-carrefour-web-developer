// Atividade prática //

// Atividade 1: Maps
// Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

// 1. Crie uma função getAdmins que recebe um Map;
// 2. Crie um Map e popule-o com nomes de usuários e seus papéis no sistema.
// 3. Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores.

function getAdmins(map) {
    let admins = []
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Jose', 'Admin');
usuarios.set('Felipe', 'User');
usuarios.set('Ana', 'Admin');
usuarios.set('Rafaela', 'User');

console.log(getAdmins(usuarios));
