import https from "https";
import querystring from "querystring";

const postOptions = {
  hostname: "bubble-sql-test.herokuapp.com",
  path: "/api/posts/2",
  method: "POST",
  headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export default {
  //POST REQUEST (adding a post to database)
  create: (bubble_id, title, author, body) => {
    const postData = querystring.stringify({
      "bubbleID": bubble_id,
      "title": title,
      "author": author,
      "body": body
    });

    return new Promise((resolve, reject) => {
      const request = https.request(postOptions, (response) => {
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });
        response.on('end', () => {
          resolve(data);
        })
      });
      request.write(postData);
      request.end();
      request.on('error', (err) => reject(err));
    });
  },
  getAllPosts: () => {
    const url = 'https://bubble-sql-test.herokuapp.com/api/posts/2';
    return new Promise((resolve, reject) => {
      const request = https.get(url, (response) => {
        let data = '';
        response.on('data', (chunk) => { data += chunk; });
        response.on('end', () => { resolve(JSON.parse(data)) });
      });
      request.end();
      request.on('error', (err) => reject(err));
    });
  }
  //END OF EXPORT
}
