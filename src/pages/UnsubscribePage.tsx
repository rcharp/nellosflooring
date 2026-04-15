import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

const UnsubscribePage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "valid" | "already" | "invalid" | "success" | "error">("loading");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    const validate = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`,
          { headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY } }
        );
        const data = await res.json();
        if (res.ok && data.valid === true) setStatus("valid");
        else if (data.reason === "already_unsubscribed") setStatus("already");
        else setStatus("invalid");
      } catch {
        setStatus("error");
      }
    };
    validate();
  }, [token]);

  const handleUnsubscribe = async () => {
    setProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.success) setStatus("success");
      else if (data?.reason === "already_unsubscribed") setStatus("already");
      else setStatus("error");
    } catch {
      setStatus("error");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-card rounded-2xl shadow-lg p-8 text-center space-y-4">
        {status === "loading" && <p className="text-muted-foreground">Loading...</p>}
        {status === "valid" && (
          <>
            <h1 className="text-2xl font-heading font-bold text-foreground">Unsubscribe</h1>
            <p className="text-muted-foreground">Are you sure you want to unsubscribe from our emails?</p>
            <Button onClick={handleUnsubscribe} disabled={processing} className="w-full">
              {processing ? "Processing..." : "Confirm Unsubscribe"}
            </Button>
          </>
        )}
        {status === "success" && (
          <>
            <h1 className="text-2xl font-heading font-bold text-foreground">Unsubscribed</h1>
            <p className="text-muted-foreground">You've been successfully unsubscribed from our emails.</p>
          </>
        )}
        {status === "already" && (
          <>
            <h1 className="text-2xl font-heading font-bold text-foreground">Already Unsubscribed</h1>
            <p className="text-muted-foreground">This email address has already been unsubscribed.</p>
          </>
        )}
        {status === "invalid" && (
          <>
            <h1 className="text-2xl font-heading font-bold text-foreground">Invalid Link</h1>
            <p className="text-muted-foreground">This unsubscribe link is invalid or has expired.</p>
          </>
        )}
        {status === "error" && (
          <>
            <h1 className="text-2xl font-heading font-bold text-foreground">Something Went Wrong</h1>
            <p className="text-muted-foreground">Please try again later or contact us directly.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UnsubscribePage;
