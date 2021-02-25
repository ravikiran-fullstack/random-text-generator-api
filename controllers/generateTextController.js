import fs from "fs";
import path from "path";

import RandomLatinWord from "../models/randomLatinWord.js";

export const generateText = async (req, res) => {
  const latinTextData = await retrieveLatinTextFromDb();
  // let data = readJsonFile();
  return res.send(latinTextData);
};

export const generateTextCustom = async (req, res) => { 
  let paraCount = parseInt(req.params.paraCount);
  const paraSize = req.params.paraSize;
  if ((paraSize !== 'small') && (paraSize !== 'medium') && (paraSize !== 'large')) { 
    return res.status(400).json({message: "Proper size is required"});
  }
  if (paraCount > 10) { 
    paraCount = 10;
  }

  const data = prepareRandomLatinText(paraCount, paraSize);

  return res.send(data);
}

const prepareRandomLatinText = (paraCount, paraSize) => { 
  const data = readJsonFile();
  const preparedData = [];
  
  // console.log(data[paraSize]);

  for (let i = 0; i < paraCount; i++) { 
    preparedData.push(data[paraSize][i]);
  }

  return preparedData;  
}

const retrieveLatinTextFromDb = async () => {
  let data = "";
  if (fs.existsSync("data/latinText.json")) {
    console.log("exists");
    data = readJsonFile();
  } else {
    console.log("does not exists");
    const result = await RandomLatinWord.findOne({ set: "set3" });
    writeJsonFile(result);
    return result;
  }

  return data;
};

function readJsonFile() {
  const rawQuestionsData = fs.readFileSync("data/latinText.json");
  const jsonQuestionsData = JSON.parse(rawQuestionsData);
  return jsonQuestionsData;
}

function writeJsonFile(dbData) {
  const data = JSON.stringify(dbData, null, 2);
  fs.writeFileSync("data/latinText.json", data);
}
