import { rest } from 'msw'
export const handlers = [

  rest.post('http://localhost:5000/addcomment', (req, res, ctx) => {
    // Persist user's authentication in the session
    return res(
      // Respond with a 200 status code
      ctx.json({
       id: Date.now(),
       text: req.body.text
      })
    )
  }),
  

]