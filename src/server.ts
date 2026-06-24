import app from "./app";
import { env } from "./config/env";

app.listen(env.PORT, () => {
  console.log(`🚗 MyGarage API running on http://localhost:${env.PORT}`);
  console.log(`   Health: http://localhost:${env.PORT}/api/health`);
});

export default app;
