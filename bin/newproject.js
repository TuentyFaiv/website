const readline = require('readline');
const fs = require('fs');

const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout
});

const postData = {};

rl.question('Title: ', answer1 => {
  postData['title'] = answer1;
  rl.question('Description: ', answer2 => {
    postData['description'] = answer2;
    rl.question('Author: ', answer3 => {
      postData['author'] = answer3;
      rl.question('URL:', answer4 => {
        postData['url'] = answer4;
        rl.close();
      });
    });
  });
});


rl.on('close', () => {
  const now = new Date();
  const slug = postData.title.toLowerCase().replace(/ /g, '-').substr(0, 39);

  postData['fileName'] = `index.md`;
  postData['date'] = now.toISOString();

  try {
    fs.statSync(`content/posts/projects/${slug}`);
  } catch (err) {
    fs.mkdirSync(`content/posts/projects/${slug}`);
  }

  try {
    fs.statSync(`content/posts/projects/${slug}/${postData.fileName}`)
    console.error('Error!!: The post has already been created');
  } catch (err) {
    fs.writeFileSync(`content/posts/projects/${slug}/${postData.fileName}`, `---
title: '${postData.title}'
date: ${postData.date}
description: '${postData.description}'
author: '${postData.author}'
twitterUser: 'TuentyFaiv'
banner: ./cover.png
color: ''
url: '${postData.url}'
---`);
    console.log(`Success!!: content/posts/projects/${slug}/${postData.fileName} was created`);
  }
});