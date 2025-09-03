import { createClient } from "@supabase/supabase-js";

//const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
//const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabaseUrl = "https://tgqoaogsjjpllhbrjkal.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRncW9hb2dzampwbGxoYnJqa2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3Njc4NTEsImV4cCI6MjA3MjM0Mzg1MX0.pxLGHTPnbnHR-2AnANG4WQe-JtW7w4uFFYcUuKAxF7U";
const supabase = createClient(supabaseUrl, supabaseKey);

// Image Upload to Storage

export const uploadImage = async (file) => {
  const fileName = `posts/${Date.now()}_${file.name}`;

 
  const { data, error } = await supabase.storage
    .from("blog-images")
    .upload(fileName, file, {
      cacheControl: "public, max-age=604800",
      upsert: false,
    });

  if (error) throw error;


  return data.path;
};


export const createPost = async ({ title, body, category, imageFile }) => {
  let imageUrl = null;
  if (imageFile) {
    const imagePath = await uploadImage(imageFile);
  
    imageUrl = `${supabaseUrl}/storage/v1/object/public/blog-images/${imagePath}`;
  }

  const { data, error } = await supabase
    .from("posts")
    .insert({
      title,
      body,
      category,
      image_url: imageUrl,
      created_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};
// Get All Posts
export const getAllPosts = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};
export async function fetchEmails() {
  const { data, error } = await supabase
    .from("emails") 
    .select("*");

  if (error) {
    console.error("Error fetching emails:", error);
    return [];
  }

  return data.map((row) => row.email);
}
// Get Single Post
export const getPostById = async (id) => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

// Update Post
// Update Post - Fixed version
export const updatePost = async (id, { title, body, category, imageFile }) => {
  const updates = { title, body, category };

  if (imageFile) {
    // Delete old image if exists
    const oldPost = await getPostById(id);
    if (oldPost.image_url) {
      const fileName = oldPost.image_url.split("/").pop();
      await supabase.storage.from("blog-images").remove([`posts/${fileName}`]);
    }

    // Upload new image and get full public URL
    const imagePath = await uploadImage(imageFile);
    updates.image_url = `${supabaseUrl}/storage/v1/object/public/blog-images/${imagePath}`;
  }

  const { data, error } = await supabase
    .from("posts")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Delete Post
export const deletePost = async (id) => {
  // Delete associated image
  const post = await getPostById(id);
  if (post.image_url) {
    const fileName = post.image_url.split("/").pop();
    await supabase.storage.from("blog-images").remove([`posts/${fileName}`]);
  }

  // Delete post
  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) throw error;
};

export const searchPosts = async (query) => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .or(`title.ilike.%${query}%,body.ilike.%${query}%`);

  if (error) throw error;
  return data;
};

// Save Email
export const saveEmail = async (email) => {
  const { data, error } = await supabase
    .from("emails")
    .insert({ email })
    .select()
    .single();

  if (error) throw error;
  return data;
};



export const getStats = async () => {
  const [{ count: emailCount }, { count: postCount }] = await Promise.all([
    supabase.from("emails").select("*", { count: "exact", head: true }),
    supabase.from("posts").select("*", { count: "exact", head: true }),
  ]);

  return { emailCount, postCount };
};

