import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-5 border-b-2'>
            <h1 className='text-4xl'>knowledge cafe</h1>
            <img src= {profile} alt="" />
        </div>
    );
};

export default Header;