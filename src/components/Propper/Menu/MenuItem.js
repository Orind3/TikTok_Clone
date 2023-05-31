import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../../Layouts/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <div className={cx('item')}>
            <Button className={cx('how')} type="text" leftIcon={data.icon} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
