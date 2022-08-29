import {render,screen, fireEvent} from '@testing-library/react'
import CommetList from '../components/CommetList';


test('commnets are not available',()=>{
    render(<CommetList allcomments={[]} />)
    const h2Element = screen.getByText('no comments',{exact:false})
    expect(h2Element).toBeInTheDocument()
})

test('List all comments',()=>{
    const comments =  [
            {id:1,text:"Comment 1"},
            {id:2,text:"Comment 2"},
        ]
    render(<CommetList allcomments={comments} />)
    const h2Element = screen.queryByText('no comments',{exact:false})
    expect(h2Element).not.toBeInTheDocument()

    const commentLi = screen.getAllByRole('listitem')
    expect(commentLi.length).toBe(comments.length)

})