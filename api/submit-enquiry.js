
import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseKey) {
  console.log("Supabase config check:", {
    urlLoaded: Boolean(supabaseUrl),
    secretLoaded: Boolean(supabaseKey),
  });

 return res.status(500).json({
  error: "Server configuration is incomplete.",
  urlLoaded: Boolean(supabaseUrl),
  secretLoaded: Boolean(supabaseKey),
});
}

  const { name, email, business_name, service, message } =
    req.body ?? {};

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return res.status(400).json({
      error: "Please provide your name, email, and project message.",
    });
  }

  if (
    name.length > 120 ||
    email.length > 254 ||
    message.length > 5000 ||
    (business_name != null &&
      (typeof business_name !== "string" ||
        business_name.length > 200)) ||
    (service != null &&
      (typeof service !== "string" || service.length > 120))
  ) {
    return res.status(400).json({
      error: "One or more fields exceed the allowed length.",
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.trim())) {
    return res.status(400).json({
      error: "Please enter a valid email address.",
    });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from("enquiries")
      .insert({
        name: name.trim(),
        email: email.trim(),
        business_name: business_name?.trim() || null,
        service: service?.trim() || null,
        message: message.trim(),
      });

    if (error) {
      console.error("Enquiry insert failed:", error.message);

      return res.status(500).json({
        error: "We couldn't save your enquiry. Please try again.",
      });
    }

    return res.status(201).json({
      message: "Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Enquiry submission failed:", error.message);

    return res.status(500).json({
      error: "Something went wrong. Please try again.",
    });
  }
}
