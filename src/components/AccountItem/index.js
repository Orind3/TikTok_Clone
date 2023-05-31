import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
 
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')}
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d0dfa844eab1a4fe4bfefbecde65392c~c5_100x100.jpeg?x-expires=1685592000&x-signature=GRZU5Q3G49%2FujkQ5Pq3O9cS1xwc%3D"
        alt="Avatar"
        />
        <div className={cx('info')}>
            <div className={cx('name')}>
                <span>Name</span>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
            </div>
            <span className={cx('username')}>
                User name
            </span>
        </div>              
    </div>;
}

export default AccountItem;