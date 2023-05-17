import { addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { db } from "../../core/firebase-config/firebase.config";

// Create Message
export const createMessage = (data) => async(dispatch) => {
    try {
        toast.loading('Loading...');

        setTimeout(async ()=> {
            // Tạo document trong collection Message 
            await addDoc(collection(db, 'Message'), {
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

// Update Message
export const updateMessage = (data) => async (dispacth) => {
    try {
        toast.loading('Loading...');
        const MessageRef = doc(db,'Message', data.id);
        setTimeout(async ()=> {
            // Update document trong collection Message 
            await updateDoc(MessageRef, data.data);
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

// Delete Message
export const deleteMessage = (idMessage) => async (dispatch) => {
    try {
        toast.loading('Loading...');
        await deleteDoc(doc(db, "Message", idMessage));
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