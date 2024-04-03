import {Child} from './Child';

export const Parent = () => {
    return <Child color="White" onClick={() => console.log('Clicked')}>
        
    </Child>
};

export default Parent;