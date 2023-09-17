import PropTypes from 'prop-types';



const Link = ({route}) => {
    return (
        <li className="mr-3 hover:bg-yellow-800 px-6">
            <a href={route.path}></a>{route.name}
        </li>
    );
};
Link.propTypes = {
    route: PropTypes.object.isRequired
}
export default Link;