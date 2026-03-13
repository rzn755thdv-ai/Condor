{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 export default \{\
  async fetch(request) \{\
\
    const html = `\
    <!DOCTYPE html>\
    <html>\
    <head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width,initial-scale=1">\
    <title>Condor Consulting Group</title>\
\
    <style>\
\
    body\{\
      margin:0;\
      background:#0b0b0b;\
      color:white;\
      font-family:Helvetica,Arial,sans-serif;\
      display:flex;\
      justify-content:center;\
      align-items:center;\
      height:100vh;\
      text-align:center;\
    \}\
\
    .container\{\
      max-width:500px;\
      padding:40px;\
    \}\
\
    .logo\{\
      width:140px;\
      margin-bottom:20px;\
    \}\
\
    .slide\{\
      margin-top:40px;\
      padding:18px 40px;\
      background:#8b1c1c;\
      border-radius:50px;\
      font-weight:bold;\
      cursor:pointer;\
    \}\
\
    </style>\
    </head>\
\
    <body>\
\
    <div class="container">\
\
      <img class="logo" src="https://placehold.co/200x200">\
\
      <h2>Condor Consulting Group</h2>\
\
      <p>\
      Adaptive Solutions for the Modern World\
      </p>\
\
      <div class="slide">\
      Slide to Connect\
      </div>\
\
    </div>\
\
    </body>\
    </html>\
    `\
\
    return new Response(html, \{\
      headers: \{ "content-type": "text/html;charset=UTF-8" \}\
    \})\
  \}\
\}}