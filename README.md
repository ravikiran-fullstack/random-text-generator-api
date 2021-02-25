# random-text-generator-api

I) API documentation
  This API helps us generate random text required by any application, please read the documentaion for available endpoints and parameters required to be passed
 
 Currenntly available endpoints
 1) '/generate'
    This endpoint returns random text containing total 30 paragraphs, of which 10 are small sized paragraphs, 10 are medium sized and 10 are large sized paragraphs
    
    
 2) '/generate/:paraCount/:paraSize' 
    This endpoint returns random text containing total paragrahs equal to paraCount and size of the para will equal to paraSize
    Note: API can only send max 10 paragraphs and paraSize can take only these values small or medium or large
