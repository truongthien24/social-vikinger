import { addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp, updateDoc, query, where } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { db } from "../../core/firebase-config/firebase.config";

// Create Group
export const createGroup = (data) => async(dispatch) => {
    try {
        toast.loading('Loading...');

        setTimeout(async ()=> {
            // Tạo document trong collection Group 
            await addDoc(collection(db, 'Group'), {
                ...data, 
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

// Update Group
export const updateGroup = (data) => async (dispacth) => {
    try {
        toast.loading('Loading...');
        const GroupRef = doc(db,'Group', data.id);
        setTimeout(async ()=> {
            // Update document trong collection Group 
            await updateDoc(GroupRef, data.data);
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

// Delete Group
export const deleteGroup = (idGroup) => async (dispatch) => {
    try {
        toast.loading('Loading...');
        await deleteDoc(doc(db, "Group", idGroup));
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


export const getGroupByIDUser = (id) => async (dispatch) => {
    try {
        const groupRef = collection(db, 'Group');
        const groupQuery = query(groupRef, where('groupMember', 'array-contains', `${id}`));
        const groupResult = await getDocs(groupQuery);
        const result = groupResult.docs.map((item,index)=>({...item.data(),id: item.id}))
        return result;
    } catch (err) {
        return false
    }
}