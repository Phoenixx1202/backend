import 'dotenv/config';

import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão definida em process.env.STRING_CONEXAO
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts(){
    // Acessa o banco de dados "imersao-devbackend"
      const db = conexao.db("imersao-devbackend");
    // Acessa a coleção "posts"
      const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção como um array
      return colecao.find().toArray();
};

export async function criarPost(novoPost) {
     const db = conexao.db("imersao-devbackend");
     const colecao = db.collection("posts");
     return colecao.insertOne(novoPost);
  
};


export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imersao-devbackend");
  const colecao = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});

};