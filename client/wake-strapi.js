// Wake up Strapi Cloud instance before build
const STRAPI_URL = process.env.VITE_STRAPI_BASE_URL || process.env.STRAPI_BASE_URL;

if (!STRAPI_URL) {
  console.log('[Wake Strapi] No Strapi URL found, skipping...');
  process.exit(0);
}

console.log('[Wake Strapi] Waking up Strapi instance:', STRAPI_URL);

async function wakeStrapi() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const response = await fetch(`${STRAPI_URL}/api/articles?pagination[pageSize]=1`, {
      signal: controller.signal
    });

    clearTimeout(timeout);

    if (response.ok) {
      console.log('[Wake Strapi] ✓ Strapi is awake and responding');
      process.exit(0);
    } else {
      console.log('[Wake Strapi] ✓ Strapi responded with status:', response.status);
      process.exit(0);
    }
  } catch (error) {
    console.log('[Wake Strapi] ⚠ Warning: Could not wake Strapi:', error.message);
    console.log('[Wake Strapi] Continuing with build anyway...');
    process.exit(0); // Don't fail the build
  }
}

wakeStrapi();
