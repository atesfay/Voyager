const initState = {
    projects:[
        { id: '1', title: 'Title 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        { id: '2', title: 'Title 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { id: '2', title: 'Title 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
    ]
}

const projectReducer = (state = initState, action) =>{
    return state
}

export default projectReducer