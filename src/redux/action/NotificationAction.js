import { addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { db } from "../../core/firebase-config/firebase.config";

// Create Notification
export const createNotification = (data) => async(dispatch) => {
    try {
        toast.loading('Loading...');

        setTimeout(async ()=> {
            // Tạo document trong collection Notification 
            await addDoc(collection(db, 'Notification'), {
                ...data, 
                fromUID: JSON.parse(localStorage.getItem('jwt')), 
                createdAt: serverTimestamp(),
            });
            // Thông báo
            toast.dismiss();
            toast.success('Create successfully!')
        }, 1000);
        return true;
    } catch(error) {
        toast.dismiss();
        toast.error('Create error!')
        return false;
    }
}

// Update Notification
export const updateNotification = (data) => async (dispacth) => {
    try {
        toast.loading('Loading...');
        const NotificationRef = doc(db,'Notification', data.id);
        setTimeout(async ()=> {
            // Update document trong collection Notification 
            await updateDoc(NotificationRef, data.data);
            // Thông báo
            toast.dismiss();
            toast.success('Update successfully!')
        }, 1000);
    } catch(err) {
        toast.dismiss();
        toast.error('Update error!')
        return false;
    }
}

// Delete Notification
export const deleteNotification = (idNotification) => async (dispatch) => {
    try {
        toast.loading('Loading...');
        await deleteDoc(doc(db, "Notification", idNotification));
        setTimeout(()=> {
            toast.dismiss();
            toast.success('Delete success!')
        }, 1000)
    } catch (err) {
        toast.dismiss();
        toast.error('Delete error!')
        return false;
    }
} 