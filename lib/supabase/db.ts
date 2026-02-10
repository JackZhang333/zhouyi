import { createClient } from "./client";
import { DivinationRecord, Comment } from "@/types";

export async function saveDivinationRecord(record: DivinationRecord) {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return null;

    const { data, error } = await supabase
        .from("divination_records")
        .upsert({
            ...record,
            user_id: user.id,
            updated_at: new Date().toISOString(),
        })
        .select()
        .single();

    if (error) {
        console.error("Error saving record:", error);
        throw error;
    }

    return data;
}

export async function getDivinationRecords() {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return [];

    const { data, error } = await supabase
        .from("divination_records")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching records:", error);
        return [];
    }

    return data;
}

export async function deleteDivinationRecord(id: string) {
    const supabase = createClient();
    const { error } = await supabase
        .from("divination_records")
        .delete()
        .eq("id", id);

    if (error) {
        console.error("Error deleting record:", error);
        throw error;
    }
}

// 卦象评论（针对Hexagram本身的评论/笔记）
export async function getHexagramComments(hexagramId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("hexagram_id", hexagramId)
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching hexagram comments:", error);
        return [];
    }

    return data;
}

export async function addHexagramComment(hexagramId: string, content: string, userId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from("comments")
        .insert({
            hexagram_id: hexagramId,
            content,
            user_id: userId,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        })
        .select()
        .single();

    if (error) {
        console.error("Error adding hexagram comment:", error);
        throw error;
    }

    return data;
}

export async function deleteComment(id: string) {
    const supabase = createClient();
    const { error } = await supabase
        .from("comments")
        .delete()
        .eq("id", id);

    if (error) {
        console.error("Error deleting comment:", error);
        throw error;
    }
}

export async function getComments(recordId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("record_id", recordId)
        .order("created_at", { ascending: true });

    if (error) {
        console.error("Error fetching comments:", error);
        return [];
    }

    return data;
}

export async function addComment(comment: Partial<Comment>) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from("comments")
        .insert(comment)
        .select()
        .single();

    if (error) {
        console.error("Error adding comment:", error);
        throw error;
    }

    return data;
}
